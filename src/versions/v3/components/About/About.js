import './About.css';
import Title from "../Title/Title";
import Container from "../Container/Container";

const linkProps = { children: 'Back', to: '/' };

function About () {

    const title = 'About Smile Radio'

    return(
        <>
            <Title linkProps={linkProps} title={title} />
            <Container>
                <p className='About__content'>
                    Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.

                    Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.

                    Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada.

                    Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada.
                </p>
            </Container>
        </>
    )
}

export default About;