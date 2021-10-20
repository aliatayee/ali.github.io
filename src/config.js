// config.js
module.exports = {
    github: {
        username: 'aliatayee', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'ali-aqa-atayee-742449155',
        twitter: 'AtayeeAqa',
        facebook: 'aliatayee117',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'www.aliatayee.com',
        phone: '+93797823523',
        email: 'hello@aliatayee.com'
    },
    skills: [
        'PHP',
        'Laravel',
        'JavaScript',
        'React.js',
        'Vue.js',
        'Node.js',
        'Jquery',
        'MySQL',
        'Git',
        'Docker',
        'CSS',
        'Antd',
        'Tailwind',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Revand ICT Services',
            position: 'CEO',
            from: 'September 2018',
            to: 'Present'
        },
        { 
            company: 'Nexus Point',
            position: 'Full - Stack Developer',
            from: 'July 2019',
            to: 'August 2021'
        },
        { 
            company: 'WePlus Media',
            position: 'Graphic Designer & Branding Specialist',
            from: 'January 2019',
            to: ' August 2020'
        }
    ],
    education: [
        { 
            institution: 'Kabul Polytechnic University',
            degree: 'Bachelor of Computer Science',
            from: '2017',
            to: '2021'
        },
        { 
            institution: 'Founder Institute',
            degree: 'Entrepreneurship Certification',
            from: '2019',
            to: '2020',
        },
        { 
            institution: 'Dawood Zerak High School',
            degree: 'Secondary School Certificate (SSC)',
            from: '2004',
            to: '2016'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'aliatayee',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-WLLB5E14M6' // Please remove this and use your own tag id
    },
    hotjar: {
        id: '2617601', //  Please remove this and use your own id
        snippetVersion : 6
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
