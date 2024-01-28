import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';



const Booking = () => {
    const [selected, setSelected] = useState();
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className="flex gap-6 justify-center h-screen 100vh text-white items-center">
            <div className="w-1/2">
                <h2 className="text-5xl font-bold">COX'S BAZAR</h2>
                <p className="text-2xl">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rain forest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>

            </div>
            <div className="w-1/2 mx-auto">
                <DayPicker className=''
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                />
            </div>
        </div>
    );
};

export default Booking;