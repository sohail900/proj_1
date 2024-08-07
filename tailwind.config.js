/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            backgroundColor: {
                main_color: '#CA3CFB',
            },
            textColor: {
                light_color: '#00000099',
            },
            backgroundImage: {
                custom_gradient:
                    'linear-gradient(92.52deg, #B608F3 12.63%, #D252FF 97.99%)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
