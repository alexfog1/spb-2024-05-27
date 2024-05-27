function showEquipment(category) {
    const equipmentImage = document.getElementById('equipmentImage');
    equipmentImage.style.display = 'flex'; // Set the display to flex to initiate flexbox properties
    equipmentImage.innerHTML = ''; // Clear existing content

    const imageDetails = {
        'audio': [
            { src: 'sonya7.jpg', alt: 'Микрофон Shure MOTIV MV7 ' },
            { src: 'gleb.jpg', alt: 'Предусилитель SE ELECTRONICS DM1' },
            { src: 'gleb3.jpg', alt: 'Аудио интерфейс FOCUSRITE Scarlett 2i2' }
        ],
        'video': [
            { src: 'sonya7.webp', alt: 'Видеокамера Sony 7A' },
            { src: 'p2.png', alt: 'Video Equipment 2' },
            { src: 'p2.png', alt: 'Video Equipment 3' }
        ],
        'lighting': [
            { src: 'p2.png', alt: 'Lighting Equipment 1' },
            { src: 'p2.png', alt: 'Lighting Equipment 2' },
            { src: 'p2.png', alt: 'Lighting Equipment 3' }
        ],
        'additional': [
            { src: 'p2.png', alt: 'Additional Equipment 1' },
            { src: 'p2.png', alt: 'Additional Equipment 2' },
            { src: 'p2.png', alt: 'Additional Equipment 3' }
        ]
    };

    document.querySelectorAll('.slider-btn').forEach(button => {
        button.addEventListener('click', function() {
            const offset = this.classList.contains('left-btn') ? -1 : 1;
            const slides = this.parentElement.querySelectorAll('.slide');
            const activeIndex = Array.from(slides).findIndex(slide => slide.style.opacity !== '0');
            slides[activeIndex].style.opacity = '0'; // Hide current slide
            let newIndex = activeIndex + offset;
            if (newIndex >= slides.length) newIndex = 0;
            if (newIndex < 0) newIndex = slides.length - 1;
            slides[newIndex].style.opacity = '1'; // Show new slide
        });
    });
    
    
    if (imageDetails[category]) {
        imageDetails[category].forEach(detail => {
            const imgElement = document.createElement('img');
            imgElement.className = 'equipment-img';
            imgElement.src = detail.src;
            imgElement.alt = detail.alt;
            imgElement.style.width = '100%';  // Responsive width
            imgElement.style.maxWidth = '336px'; // Maximum width
            imgElement.style.height = 'auto'; // Maintain aspect ratio

            const textElement = document.createElement('p');
            textElement.textContent = detail.alt;

            const wrapper = document.createElement('div');
            wrapper.className = 'image-wrappe';
            wrapper.appendChild(imgElement);
            wrapper.appendChild(textElement);

            equipmentImage.appendChild(wrapper);
        });
    }
}

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
            answer.style.maxHeight = '0';
            answer.style.padding = '0 10px';
            this.querySelector('.arrow').style.transform = 'rotate(0deg)';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '10px';
            this.querySelector('.arrow').style.transform = 'rotate(180deg)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('audioButton').click();
});
