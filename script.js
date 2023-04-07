const btn_random = document.getElementById("btn-random");
const comment_text = document.getElementById("comment");
const comment_id = document.getElementById("comment_id");

btn_random.addEventListener("click", () => randomText());

const randomText = async () => {
  await fetch(`https://jsonplaceholder.typicode.com/comments/`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const random = Math.floor(Math.random() * data.length);
      const comment = data.filter((comment) => comment.id == random);
      

      comment_id.textContent = `${comment[0].id}`
      comment_text.textContent = `" ${comment[0].body} "`
    });
};
