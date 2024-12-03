<script>
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add the 'visible' class to sections when they are in the viewport
  function handleScroll() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("visible");
      }
    });
  }

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);

  // Trigger handleScroll on page load to catch any sections already in view
  handleScroll();
</script>
<!-- Add Connect Wallet Button -->
<div class="container">
  <div class="logo-container">
    <img src="https://i.ibb.co/tPk3Kpk/thrillhouse-01-A-cyberpunk-graphic-of-an-Illuminati-eye-surroun-e4a9a24f-1f99-45d6-b1a8-003038cc58c7.png" alt="TEARS Logo" class="logo">
  </div>
  <h1 class="glitch" data-text="$TEARS">$TEARS</h1>
  <h2 class="glitch" data-text="The Coin That Cares">The Coin That Cares</h2>
  <p>For when the market is as disappointing as everything else.</p>

  <!-- Add Connect Wallet Button -->
  <button id="connect-wallet" class="button">Connect Wallet</button>
  <p id="wallet-address"></p>
</div>
