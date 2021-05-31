window.onload = function () {
  var imageS = document.getElementById('imageS')
  var pixelOpts = [{ resolution: 32 }]
  var pixelimageS = imageS.closePixelate(pixelOpts)
  var range = document.getElementById('range')
  var output = document.getElementById('output')

  range.addEventListener('change', function (event) {
    var res = parseInt(event.target.value, 10)
    res = Math.floor(res / 2) * 2
    res = Math.max(1, Math.min(100, res))
    output.textContent = res
    pixelOpts = [{ resolution: res }]
    pixelimageS.render(pixelOpts)
  }, false)
}
