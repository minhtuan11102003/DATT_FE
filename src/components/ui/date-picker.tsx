"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo({ title }: { title: string }) {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    // variant={"outline"}
                    className={cn(
                        "w-full justify-between text-left font-normal border-b-[3px]",
                        !date && "text-muted-foreground"
                    )}
                >
                    {date ? format(date, "PPP") : <span>{title}</span>}
                    <CalendarIcon className=" h-4 w-8 " />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 bg-[#313a45] text-black" align="start">
                <Calendar 
                    className=""
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}