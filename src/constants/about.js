import gaurav from "../assets/gaurav.jfif"
import abhinav from "../assets/abhinav.jfif"

const description = 'Our passion towards building creative and beautiful ' +
    'websites and applications using new technologies persuaded us to ' +
    'come up here and help others to make this world a better and accesssible ' +
    'place to live.'

export const about = {
    description: description,
    devs: [
        {
            name: 'Gaurav Sharma',
            gender: 'Male',
            age: '21',
            email: 'gauravksh11@gmail.com',
            github: 'https://github.com/grvsharma1810',
            linkedin: 'https://www.linkedin.com/in/gaurav-kr-sharma/',
            avatar: gaurav,
            qualifications: {
                degree: 'B.E.',
                area: 'Computer Science and Engineering',
                college: 'LNCT Bhopal'
            }
        },
        {
            name: 'Abhinav Giri',
            gender: 'Male',
            age: '22',
            email: 'abhi9giri@gmail.com',
            github: 'https://github.com/AVNV2201',
            linkedin: 'https://linkedin.com/in/abhinav-kumar-giri',
            resume: '',
            avatar: abhinav,
            qualifications: [
                {
                    degree: 'B.Tech',
                    area: 'Computer Science and Engineering',
                    college: 'NIT Allahabad'
                }
            ]
        }
    ]
}