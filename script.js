const submit = document.querySelector('.submit-button');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');
const name = document.querySelector('.comment-writer-name');

// Function to store and append comment with template function
function appendComment(event) {
    const data = {
        avatar: "user_img.png",
        comment: commentInput.value,
        author: name.value
    };

    // Stop the webpage from reloading after hitting submit
    event.preventDefault();

    // If the value is nothing just return
    if (commentInput.value.length < 1 || name.value.length < 1)
        return;

    // Insert new template into DOM
    template(data);

    // Reset textarea value
    commentInput.value = "";

    // Save the list to localStorage
    localStorage.setItem('commentListing', commentList.innerHTML);
}

// Function to inject html with the comment data
function template(data) {
    commentList.insertAdjacentHTML("beforebegin", `
  <div class="all-comments">
      <img class="comment-avatar" src="${data.avatar}" />
      <div>
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}

submit.addEventListener('click', appendComment)

// Variable to check list of comments
const saved = localStorage.getItem('commentListing');

// Update list if any saved item is found
if (saved) {
    commentList.innerHTML = saved;
}
