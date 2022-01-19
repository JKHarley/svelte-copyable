function copyable(element, text) {
  const handleClick = () => {
    if (text && text.length > 0) {
      !navigator.clipboard ? console.error("Browser must have access to the navigator.clipboard object for the Svelte copyable package to work") : navigator.clipboard.writeText(text);
      element.dispatchEvent(new CustomEvent("textCopied", { detail: text }));
    }
  };
  element.addEventListener("click", handleClick, true);
  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    }
  };
}
export { copyable as default };
