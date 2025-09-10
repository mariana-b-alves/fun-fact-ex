import { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Button from './Button';

export default function DynamicDemo() {

    const [funFact, setFunFact] = useState(["", "", ""]);

    const fetchApi = () => {
        Promise.all([
            fetch("https://uselessfacts.jsph.pl/random.json").then(res => res.json()),
            fetch("https://uselessfacts.jsph.pl/random.json").then(res => res.json()),
            fetch("https://uselessfacts.jsph.pl/random.json").then(res => res.json())
        ])
        .then((results) => {
            const facts = results.map(item => item.text);
            setFunFact(facts);
        });
    };


    const createDynamicTabs = () => {
        return funFact.map((fact, index) => (
                <AccordionTab key={index} header={`Fun Fact ${index + 1}`}>
                    <p>{fact}</p>
                </AccordionTab>
        ));
    };

    return (
        <div className="card">
             <Accordion multiple activeIndex={[0]}>{createDynamicTabs()}</Accordion>
             <Button callApi={fetchApi} /> 
        </div>
    );

}


        