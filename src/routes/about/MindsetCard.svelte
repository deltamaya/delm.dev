<script>
import InviewPopup from "../InviewPopup.svelte";

    let lgbtSupportInView = $state(false);

    let politicValueInView = $state(false);

    let {observeme}=$props()
</script>
<h1 class="text-4xl font-bold">.mindset</h1>

        <div class="h-full w-full p-4 flex flex-col">
            <div
                class="justify-center items-center flex flex-col flex-grow space-y-5"
            >
                <div class="flex space-x-4 font-bold items-center">
                    <InviewPopup
                        {observeme}
                        isDisplay={lgbtSupportInView}
                        inviewCallback={() => (lgbtSupportInView = true)}
                    >
                        <div
                            class="flex space-x-4 justify-center items-center flex-wrap"
                        >
                            <p>I Support</p>
                            <img
                                alt="pride flag"
                                src="/pride_flag.png"
                                class="h-12"
                            />
                            <p>!</p>
                        </div>
                    </InviewPopup>
                </div>
                <div class="flex space-x-4 font-bold items-center">
                    <InviewPopup
                        {observeme}
                        isDisplay={politicValueInView}
                        inviewCallback={() => (politicValueInView = true)}
                    >
                        <div
                            class="flex space-x-4 justify-center items-center flex-wrap"
                        >
                            <img
                                alt="yellow flag"
                                src="/yellow_flag.png"
                                class="h-12"
                            />
                            <p>Libertarianism</p>
                        </div>
                    </InviewPopup>
                </div>
                <div class="flex space-x-4 font-bold items-center">
                    <InviewPopup
                        {observeme}
                        isDisplay={politicValueInView}
                        inviewCallback={() => (politicValueInView = true)}
                    >
                        <div
                            class="flex space-x-4 justify-center items-center flex-wrap"
                        >
                            <img
                                alt="anarchism symbol"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Anarchy-symbol.svg/600px-Anarchy-symbol.svg.png"
                                class="w-16"
                            />
                            <p>Anarchism</p>
                        </div>
                    </InviewPopup>
                </div>
            </div>
        </div>