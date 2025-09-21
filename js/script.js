document.addEventListener("DOMContentLoaded", () => {
  const contractInput = document.getElementById("contractAddress");
  const copyButton = document.getElementById("copyButton");
  const tooltip = document.getElementById("tooltip");
  const buyNowButton = document.getElementById("buyNow");

  function copyToClipboard() {
    navigator.clipboard.writeText(contractInput.value).then(() => {
      tooltip.classList.add("opacity-100");
      setTimeout(() => tooltip.classList.remove("opacity-100"), 1000);
    });
  }


  copyButton.addEventListener("click", copyToClipboard);
});
