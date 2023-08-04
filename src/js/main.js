window.addEventListener("load", function (event) {
  const chatForm = document.querySelector("#chat-form");
  const chatList = document.querySelector("#chat-list");

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const value = event.target["chat-input"].value;

    if (!appendMessage(value, chatList)) return;

    event.target["chat-input"].value = "";
    event.target["chat-input"].focus();
    chatList.scrollTop = chatList.scrollHeight;
  });
});

function appendMessage(message, container) {
  if (
    message === undefined ||
    message === null ||
    message === "" ||
    message.trim() === ""
  ) {
    return false;
  }

  const element = document.createElement("li");
  element.classList.add("message");
  element.classList.add("outcomming");
  element.innerText = message;

  container.appendChild(element);

  return true;
}
