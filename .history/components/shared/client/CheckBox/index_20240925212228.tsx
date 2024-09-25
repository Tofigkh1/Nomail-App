import { useState } from 'react';

export default function CheckboxComponent() {
  
    const [isChecked, setIsChecked] = useState(false);


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className=" ">
            <label className="flex items-center space-x-2 ">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4"
                />
             
            </label>
        </div>
    );
}
