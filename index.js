function scrollToFeaturedArtworks() {
  // Show the Featured Artworks section
  document.getElementById("featured-artworks").style.display = "block";

  // Scroll to the Featured Artworks section smoothly with an offset for the fixed navbar
  const featuredSection = document.getElementById("featured-artworks");
  window.scrollTo({
    top:
      featuredSection.offsetTop -
      document.querySelector(".navbar").offsetHeight, // Adjusting for the navbar height
    behavior: "smooth",
  });
}
