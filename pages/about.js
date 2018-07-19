export default class extends React.Component {
    render() {
        return <div>
            <img src="/static/koky.png" alt="Koky logo"/>
            <h1>Koky Creado por david vicent</h1>
            <p>Siguiendo curso de next.js</p>
            <style jsx> {`
                img {
                    max-width: 50%;
                    display: block;
                    margin: 0 auto;
                }

            `}</style>
            <style jsx global>
                {`
                body {
                    background: #2b2b2b;
                    text-align: center;
                    font-family: 'Helvetica';
                    color: white;
                }
                `}
            </style>
        </div>
    }
}