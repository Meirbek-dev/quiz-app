<template>
  <div class="contactInfo">
    <form action="mailto:meirbek.b2k@gmail.com?subject=Hey there!">
      <button class="contactMe" role="button">Send me an <i id="emailLogo"></i></button>
    </form>
    <a class="telegramButton contactMe" href="https://t.me/SquoZ" target="_blank">
      <span>Send me a </span><i id="telegramLogo"></i>
    </a>

    <a class="sourceCodeButton contactMe" href="https://github.com/Meirbek-dev/quiz-app" target="_blank">
      <span>Source code </span><i id="githubLogo"></i>
    </a>
  </div>
</template>

<style>
.contactInfo {
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
}

.contactMe {
  width: 220px;
  height: 50px;
  text-decoration: none;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.contactMe:before {
  content: "";
  background: linear-gradient(45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.contactMe:active {
  color: #000;
}

.contactMe:active:after {
  background: transparent;
}

.contactMe:hover:before {
  opacity: 1;
}

.contactMe:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

#emailLogo {
  display: inline-block;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  margin-right: 4px;
  background: url("../assets/email.png") no-repeat;
  background-size: contain;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

.telegramButton {
  background-color: #0088cc;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  color: #fff;
  text-decoration: none;
}

#telegramLogo {
  display: inline-block;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  margin-right: 4px;
  background: url("../assets/telegram.png") no-repeat;
  background-size: contain;
}

.sourceCodeButton {
  background-color: #0088cc;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  margin-bottom: 40px;
  color: #fff;
  text-decoration: none;
}

#githubLogo {
  display: inline-block;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  margin-right: 4px;
  background: url("../assets/github.png") no-repeat;
  background-size: contain;
}
</style>
