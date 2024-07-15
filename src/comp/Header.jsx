import logo from "../assets/b.webp";

export default function Header() {
  const soundFile =
    "https://cdn.freesound.org/previews/731/731371_12068263-lq.mp3"; // Replace with the URL of your sound file
  const audio = new Audio(soundFile);
  const startTime = 0; // Replace with the starting point of the audio in seconds
  const endTime = 5; // Replace with the ending point of the audio in seconds

  const handleMouseEnter = () => {
    audio.currentTime = startTime;
    audio.play();
  };

  const handleMouseLeave = () => {
    audio.pause();
    audio.currentTime = startTime;
  };

  audio.addEventListener("timeupdate", () => {
    if (audio.currentTime >= endTime) {
      audio.pause();
      audio.currentTime = startTime;
    }
  });

  return (
    <header id="header">
      <img
        src={logo}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <h1>SmellPantyScores</h1>
    </header>
  );
}
