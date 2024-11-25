$(document).ready(function () {
 
  const commands = [
    {
      prompt: "┌─[root@Kali]─[~]",
      command: "ls -1 links/",
      output: `
        <div class="output-line"><a href="https://linkedin.com/in/aditya-singh4180" target="_blank">LinkedIn</a></div>
        <div class="output-line"><a href="https://github.com/linuxadi" target="_blank">GitHub</a></div>
        <div class="output-line"><a href="mailto:biskuit8520@yandex.com">Email</a></div>
      `
    },
    {
      prompt: "┌─[root@Kali]─[~]",
      command: "cat about.txt",
      output: `
        <div class="output-line">Hello! My name is <strong>Aditya Singh</strong>. I am a passionate <strong>Bug Hunter</strong> and tech enthusiast.</div>
      `
    },
    {
      prompt: "┌─[root@Kali]─[~]",
      command: "ls /",
      output: `
        <div class="output-line"><a href="https://linktr.ee/biskuit4180" target="_blank">Linktr.ee</a></div>
      `
    },
  ];

  let terminal = $("#terminal"); 
  let delay = 0;

  commands.forEach((item, index) => {
    setTimeout(() => {
    
      terminal.append(`
        <div class="line">
          <span class="prompt">${item.prompt}</span> 
          <span class="command">${item.command}</span>
        </div>
      `);

     
      setTimeout(() => {
        terminal.append(`
          <div class="output">
            ${item.output}
          </div>
        `);

        
        terminal.scrollTop(terminal.prop("scrollHeight"));
      }, 1500);
    }, delay);

    delay += 3000;
  });

 
  setTimeout(() => {
    terminal.append(`
      <div class="line">
        <span class="prompt">[linuxadi$]</span> <span class="cursor blinking">█</span>
      </div>
    `);
    terminal.scrollTop(terminal.prop("scrollHeight"));
  }, delay);
});
