<script lang="ts">
    import { fly } from "svelte/transition";
    import IconButton from "./IconButton.svelte";
    import MenuItem from "./MenuItem.svelte";
    import { socialLinks, menuItems } from "$lib/data";
    import {bios} from '$lib/data'

    let bioIndex=$state(0);
    let bioSentence=$derived(bios[bioIndex])

    $effect(()=>{
        const id=setInterval(()=>{
            if(bioIndex===bios.length-1){
                bioIndex=0;
            }else{
                bioIndex++;
            }
        },3500)
        return ()=>{
            clearInterval(id)
        }
    })
    $inspect(bioIndex)

    function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, Math.max(1,i));
			}
		};
	}
</script>

<div
    class="min-h-[calc(100vh-2.5rem)] flex justify-between items-center px-32 text-center overflow-hidden
    -z-10
"
>
    <div
        class="w-1/2 flex flex-col justify-between items-center z-10
    "
    >
        <div class="flex items-center title-float">
            <img
                src="/avatar.jpg"
                alt="avatar"
                class="w-32 rounded-full border-4 drop-shadow-2xl"
                in:fly={{ y: -50, duration: 400 }}
            />
            <div class="flex flex-col ml-5">
                <p
                    class="text-8xl font-bold text-gray-800 mt-2"
                    in:fly={{ y: -50, duration: 400, delay: 50 }}
                >
                    delm.<span class="text-red-500">dev</span>
                </p>
                <div
                    class="flex justify-center space-x-4 mt-1 items-center"
                ></div>
            </div>
        </div>
        <div class="flex flex-col items-center mt-16"
            in:fly={{ y: -50, duration: 400, delay: 100 }}>
            <h1
                class="text-6xl font-bold text-gray-800 mb-4"
                in:fly={{ y: 50, duration: 400, delay: 50 }}
            >
                Hi, I'm <span class="text-red-500">Maya☆</span>.
            </h1>
            {#key bioIndex}
            <p
                class="text-xl text-gray-600 max-w-2xl mb-8"
                in:typewriter={{speed:2}}
            >
                {bioSentence}
            </p>
            {/key}
        </div>
        <div class="flex space-x-4 justify-center text-gray-900">
            {#each socialLinks as item, index (index)}
                <div
                    in:fly|global={{
                        y: 50,
                        duration: 400,
                        delay: 150 + 25 * index,
                    }}
                >
                    <IconButton
                        href={item.href}
                        label={item.label}
                        iconClass={item.iconClass}
                    />
                </div>
            {/each}
        </div>
    </div>
    <div class="w-1/2 items-center flex flex-col z-10 space-y-5 justify-center">
        {#each menuItems as item, index (index)}
            <div
                class="w-full ml-48"
                in:fly|global={{ x: 100, duration: 400, delay: 50 * index }}
            >
                <MenuItem
                    href={item.href}
                    label={item.label}
                    title={item.title}
                    iconClass={item.iconClass}
                />
            </div>
        {/each}
    </div>

    <img
        src="/logo.png"
        alt="logo"
        class="blurred_background"
        in:fly={{ y: 100, duration: 400 }}
    />
</div>
