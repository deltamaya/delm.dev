
<script>
    let {observeme,isDisplay,inviewCallback,children}=$props()
</script>

 <div
            use:observeme
            oninview={inviewCallback}
            class="transition duration-500 ease-in-out flex"
            class:translate-y-0={isDisplay}
            class:opacity-100={isDisplay}
            class:translate-y-16={!isDisplay}
            class:opacity-0={!isDisplay}
            role="main"
    >
     {@render children()}
 </div>