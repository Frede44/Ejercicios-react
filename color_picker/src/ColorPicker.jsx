import { useState } from 'react';
import './Colors.css';

function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
    const [focusedIndex, setFocusedIndex] = useState(null);

    const colors = [
        { name: "Red", hex: "#FF0000" },
        { name: "Green", hex: "#00FF00" },
        { name: "Blue", hex: "#0000FF" },
        { name: "Yellow", hex: "#FFFF00" },
        { name: "Cyan", hex: "#00FFFF" },
        { name: "Magenta", hex: "#FF00FF" },
        { name: "Black", hex: "#000000" },
    ];

    function handleClick(color) {
       setSelectedColor(color);
    }

    function handleMouseEnter(hex){
        setSelectedColor({ hex, name: null });
        
    }

    function handleMouseLeave(){
        setSelectedColor({ hex: null, name: null });
    }


    function handleFocus(index) {
        setFocusedIndex(index);
        
    }

    function handleBlur() {
        setFocusedIndex(null);
    }

    function handleKeyDown(event, index) {
        if (event.key === 'Enter' || event.key === ' ') {
           setSelectedColor(colors[index] );
        }else if (event.key === 'ArrowRight') {
            const nextIndex = (index + 1) % colors.length;
            setFocusedIndex(nextIndex);
            document.querySelectorAll('.color-item')[nextIndex].focus();
        }else if (event.key === 'ArrowLeft') {
            const prevIndex = (index - 1 + colors.length) % colors.length;
            setFocusedIndex(prevIndex);
            document.querySelectorAll('.color-item')[prevIndex].focus();
        }
    }

    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-list">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => handleClick(color)}
                        onMouseEnter={() => handleMouseEnter(color.hex)}
                        onMouseLeave={handleMouseLeave}
                        onFocus={() => handleFocus(index, color)}
                        onBlur={handleBlur}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        tabIndex={0}
                    >
                        {selectedColor.hex === color.hex && (
                            <span className="color-code">{selectedColor.name || color.hex}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ColorPicker;