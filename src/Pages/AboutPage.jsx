import React from 'react'
import Marquee from "react-fast-marquee";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function AboutPage() {
  return (
    <div>
      <Marquee autoFill={false} className='bg-green-500'><p>Deepak bahadur bohara</p></Marquee>
      <Marquee autoFill={true} className='bg-red-500'><p>Deepak bahadur bohara</p></Marquee>
      <Marquee autoFill={true} play={false} className='bg-green-500'><p>Deepak bahadur bohara</p></Marquee>
      <Marquee autoFill={true} play={true} pauseOnHover={true} className='bg-green-500'><p>Deepak bahadur bohara</p></Marquee>
      <Marquee autoFill={true} play={true} pauseOnHover={true} speed={10} direction='right' className='bg-green-500'><p>Deepak bahadur bohara</p></Marquee>











      <Accordion>
      <AccordionItem className="border bg-gray-500"  header="What is your name?">
       my name is Deepa Bohara
      </AccordionItem>

      <AccordionItem className="border bg-gray-500" header="Where does it come from?">
Im from belauri       
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Because im a developer.
      </AccordionItem>
    </Accordion>


    </div>
  )
}
