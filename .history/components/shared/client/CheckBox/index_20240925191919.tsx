import { useState } from 'react';

export default function CheckboxComponent() {
    // Checkbox'ın seçili olup olmadığını kontrol etmek için state kullanıyoruz
    const [isChecked, setIsChecked] = useState(false);

    // Checkbox tıklama event handler'ı
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="p-4">
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4"
                />
                <span>{isChecked ? 'Checked' : 'Not Checked'}</span>
            </label>
        </div>
    );
}