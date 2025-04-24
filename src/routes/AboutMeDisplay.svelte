<div class="max-w-4xl mx-auto p-6 lg:text-2xl md:text-xl text-lg bg-neutral-800 text-neutral-100">
    <div class="w-full justify-between flex mb-2">
        <span class="underline">PROFILE(1)</span>
        <span>DELM</span>
        <span class="underline">PROFILE(1)</span>
    </div>
    <section>
        <h1 class="text-2xl font-bold text-red-600 mb-2">NAME</h1>
        <p class="ml-6 mb-4">Profile - overview of deltamaya</p>
    </section>

    <section>
        <h1 class="text-2xl font-bold text-red-600 mb-2">SYNOPSIS</h1>
        <p class="ml-6 mb-4">
            profile [-o | --origin] [-i | --interests] [-a | --aspirations] [-s | --status] [-f | --full]
        </p>
    </section>

    <section>
        <h1 class="text-2xl font-bold text-red-600 mb-2">DESCRIPTION</h1>
        <p class="ml-6 mb-4">
            The profile command outputs the contents of a user's self-introduction,
            formatted according to the specified options. The output is structured along
            multiple dimensions, each corresponding to a distinct category of personal information.
            If no options are provided, a default summary may be displayed,
            depending on the implementation.
        </p>
    </section>

    <section>
        <h1 class="text-2xl font-bold text-red-600 mb-2">OPTIONS</h1>
        <p class="ml-6 mb-4">The following options control the output dimensions of the profile command:</p>
        <dl class="ml-6 mb-4">
            <dt class="text-red-600">-o, --origin</dt>
            <dd class="ml-6 mb-2">
                Display the origin of the user.
                This includes foundational details such as background or starting point,
                providing context for the user's identity.
            </dd>

            <dt class="text-red-600">-i, --interests</dt>
            <dd class="ml-6 mb-2">
                Output a list of the user's interests.
                The interests displayed may vary over time,
                reflecting changes in preferences or activities.
            </dd>

            <dt class="text-red-600">-a, --aspirations</dt>
            <dd class="ml-6 mb-2">
                Show the user's aspirations.
                This option presents a directional goal or vision,
                emphasizing intent rather than a fixed milestone.
            </dd>

            <dt class="text-red-600">-s, --status</dt>
            <dd class="ml-6 mb-2">
                Report the user's current status.
                This dynamic field reflects the user's state at the time of invocation
                and may change frequently.
            </dd>
            <dt class="text-red-600">-f, --full</dt>
            <dd class="ml-6 mb-2">
                Display all available profile information,
                equivalent to specifying -o, -i, -a, and -s together.
            </dd>
        </dl>
    </section>

    <section>
        <h1 class="text-2xl font-bold text-red-600 mb-2">EXAMPLES</h1>
        <p class="ml-6 mb-2">To display the user's origin:</p>
        <p class="ml-10 mb-2 text-gray-400">$ profile -o</p>

        <p class="ml-6 mb-2">To view the user's current interests and aspirations:</p>
        <p class="ml-10 mb-2 text-gray-400">$ profile --interests --aspirations</p>

        <p class="ml-6 mb-2">To retrieve all available profile information:</p>
        <p class="ml-10 mb-2 text-gray-400">$ profile -f</p>
    </section>

    <section>
        <h1 class="text-2xl font-bold text-red-600 mb-2">SEE ALSO</h1>
        <p class="ml-6 mb-4">
            <a href="https://github.com/deltamaya" class="text-gray-400 hover:underline">github(7)</a>,
            <a href="https://blog.delm.dev" class="text-gray-400 hover:underline">blogs(1)</a>,
            <a href="https://steamcommunity.com/id/deltamaya"
               class="text-gray-400 hover:underline">steamcommunity(3)</a>
            <a href="https://t.me/deltamayabot" class="text-gray-400 hover:underline">telegram(4)</a>,
            <a href="https://x.com/0xdelm" class="text-gray-400 hover:underline">twitter(5)</a>,
            <a href="https://music.163.com/#/user/home?id=372313613" class="text-gray-400 hover:underline">neteasemusic(2)</a>,
        </p>
    </section>

    <section>
        <h1 class="text-2xl font-bold text-red-600 mb-2">AUTHOR</h1>
        <p class="ml-6 mb-4">Written by a starry-eyed Computer Science student with big dreams and a love for all things
            "nerdy."</p>
    </section>
</div>