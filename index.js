//Working jQuery Code
const gifForm = $("#gif-form");
gifForm.submit(e => {
  e.preventDefault();
  const searchTerm = $(".search").val();
  const url = `https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=80&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`;
  $.get(url)
    .done(resp => {
      showGiphs(resp.data.slice(0, 10));
    })
    .fail(console.log);
});

//Working jQuery Code
function showGiphs(dataArray) {
  const results = document.querySelector(".results");
  let output = "";
  output = dataArray
    .map(
      imgData =>
        `<a href="${imgData.images.original.url}" alt="${imgData.title}" target="_blank">
         <img src="${imgData.images.original.url}">
         </a>`
    )
    .join("");
  $(".results").html(output);
}
