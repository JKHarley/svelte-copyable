# Svelte Copyable
An easy to use Svelte action to copy text.

### Install
```
npm i svelte-copyable
```
### Using the Action

```html
  <script>
    import { copyable } from "svelte-copyable";
    
    const couponCode = "ABC";
  </script>
  
  <div use:copyable={couponCode}>
    Copy coupon code
  </div>
```

### Using the Action with a Callback Event

```html
<script>
  import { copyable } from "svelte-copyable";

  const couponCode = "ABC";
  let showCopiedAlert = false;

  function toggleCopiedAlert() {
    if (showCopiedAlert) return;

    showCopiedAlert = !showCopiedAlert;

    setTimeout(() => {
      showCopiedAlert = false;
    }, 1000);
  }
</script>

<div>
  <div use:copyable={couponCode} on:textCopied={() => toggleCopiedAlert()}>
    Copy coupon code
  </div>

  {#if showCopiedAlert}
    <p>Copied</p>
  {/if}
</div>
```
