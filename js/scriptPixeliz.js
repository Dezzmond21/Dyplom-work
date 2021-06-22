let image = document.getElementById("imageC");
let file = document.getElementById("fileCircle");

file.addEventListener('change', function () {
  image.src = URL.createObjectURL(file.files[0]);
  image.style.display = "block";
});

window.onload = function () {
  var imageS = document.getElementById('imageC')
  var pixelOpts = [
    { resolution: 2, shape: 'square', offset: 14 }]
  var pixelimageS = imageS.closePixelate(pixelOpts)
  var range = document.getElementById('rangeCircle')
  var output = document.getElementById('outputCircle')
  var changer = document.getElementById('pixelizatorChange')

  range.addEventListener('change', function (event) {
    var res = parseInt(event.target.value, 10)
    res = Math.floor(res / 2) * 2
    res = Math.max(2, Math.min(100, res))
    output.textContent = res
    pixelOpts = [{ resolution: res, shape:'circle', offset: 1, alpha: 1 }]
    pixelimageS.render(pixelOpts)
  }, false)
}
