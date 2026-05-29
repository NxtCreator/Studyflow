import * as SliderPrimitive from "@radix-ui/react-slider"

function Slider({ value, onValueChange, min=0, max=100, step=1 }){

return(

<SliderPrimitive.Root value={value} onValueChange={onValueChange} min={min} max={max} step={step}
    className="
        relative

        flex
        w-full

        touch-none
        select-none

        items-center"
>

    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden 
        rounded-full
        bg-muted
        "
    >
        <SliderPrimitive.Range className="absolute h-full bg-primary" />

    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb className="block size-5 rounded-full 
        bg-background
        dark:bg-white
        hover:bg-primary
        hover:scale-110
        hover:shadow-lg
        shadow-[0_2px_10px]
        transition-all
        duration-200
        focus:outline-none
        focus:shadow-[0_0_0_6px]
        focus:shadow-primary/30
        active:scale-95
        "
    />

</SliderPrimitive.Root>

)

}

export { Slider }