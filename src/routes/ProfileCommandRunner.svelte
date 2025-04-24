<script>
  // Profile data
  const profileData = {
    origin: "A Computer Science student from Shandong, China.",
    interests: "Digital multimedia, watching anime, discussing technology, culture, and creativity with friends.",
    aspirations: "To become a Full-Stack Magic Girl.",
    status: "Currently a university student, exploring opportunities in technology and education."
  };

  // Reactive state
  let command = $state("");
  let history = $state([{command:"profile -a",output:generateOutput(parseCommand("profile -a"))}]);
  let historyIndex = $state(-1);

  // Function to parse command and options
  function parseCommand(input) {
    const args = input.trim().split(/\s+/);
    if (args[0] !== "profile") {
      return { error: "Invalid command. Use 'profile' followed by options." };
    }

    const options = {
      origin: false,
      interests: false,
      aspirations: false,
      status: false,
      full: false
    };

    for (let i = 1; i < args.length; i++) {
      const arg = args[i];
      if (arg === "-o" || arg === "--origin") options.origin = true;
      else if (arg === "-i" || arg === "--interests") options.interests = true;
      else if (arg === "-a" || arg === "--aspirations") options.aspirations = true;
      else if (arg === "-s" || arg === "--status") options.status = true;
      else if (arg === "-f" || arg === "--full") options.full = true;
      else return { error: `Unknown option: ${arg}` };
    }

    return { options };
  }

  // Function to generate output based on options
  function generateOutput({options,error}) {
    if (error) return error;
    if (options.full) {
      return [
        `Origin: ${profileData.origin}`,
        `Interests: ${profileData.interests}`,
        `Aspirations: ${profileData.aspirations}`,
        `Status: ${profileData.status}`
      ].join("\n");
    }

    const output = [];
    if (options.origin) output.push(`Origin: ${profileData.origin}`);
    if (options.interests) output.push(`Interests: ${profileData.interests}`);
    if (options.aspirations) output.push(`Aspirations: ${profileData.aspirations}`);
    if (options.status) output.push(`Status: ${profileData.status}`);

    if (output.length === 0) {
      return "No options specified. Use -o, -i, -a, -s, or -f for profile information.";
    }

    return output.join("\n");
  }

  // Handle command execution
  function runCommand() {
    const parsed = parseCommand(command);
    const output = generateOutput(parsed);
    history = [...history, { command, output }];
    command = "";
  }

    // Handle keydown events for command input
  function handleKeydown(e) {
    let resetHistoryIndex=true;
    if (e.key === "Enter") {
      runCommand();
      historyIndex=-1;
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); // Prevent cursor from moving to start of input
      if (historyIndex < history.length - 1) {
        historyIndex += 1;
        command = history[history.length - 1 - historyIndex].command;
      }
      resetHistoryIndex=false;
    } else if (e.key === "ArrowDown") {
      e.preventDefault(); // Prevent cursor from moving to end of input
      if (historyIndex > -1) {
        historyIndex -= 1;
        command = historyIndex === -1 ? "" : history[history.length - 1 - historyIndex].command;
      }
      resetHistoryIndex=false;
    }else if(e.key==='Tab' && command!=='profile -f') {
      e.preventDefault()
      command='profile -f'
    }
    if(resetHistoryIndex){
      historyIndex=-1;
    }
  }

</script>

<div
  role="region"
  aria-label="Terminal Emulator"
  class="w-4/5 bg-gray-900 text-green-600 p-4 rounded-lg shadow-lg text-sm self-center"
>
  <div class="min-h-[400px] max-h-[400px] overflow-y-auto">
    {#each history as { command, output }}
      <div class="mb-2">
        <div>$ {command}</div>
        <div class="whitespace-pre-wrap">{output}</div>
      </div>
    {/each}
    <div class="flex items-center">
      <span class="mr-2">$</span>
      <input
        type="text"
        bind:value={command}
        onkeydown={handleKeydown}
        class="bg-transparent text-green-600 focus:outline-none w-full"
        placeholder="profile -f"
        aria-label="Command input"
      />
    </div>
  </div>
</div>