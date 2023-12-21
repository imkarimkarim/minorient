export function downloadImage(imgElement: HTMLImageElement, filename: string) {
  // Create a canvas element
  let canvas = document.createElement("canvas");
  let ctx: any = canvas.getContext("2d");

  // Set the canvas dimensions to match the image
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;

  // Draw the image onto the canvas
  ctx.drawImage(imgElement, 0, 0);

  // Convert the canvas content to a Blob
  canvas.toBlob(function (blob) {
    // Create a download link
    let link = document.createElement("a");
    if (!blob) return;
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Trigger the download
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(link.href);
  });
}
