export default {
    colors: {
        text: "#333",
        background: "#fff",
        primary: "#639",
        secondary: "#ff6347",
    },
    styles: {
        h1: {
            fontFamily: "heading",
            fontWeight: "heading",
            lineHeight: "heading",
            marginTop: 0,
            marginBottom: 3,
        },
        a: {
            color: "primary",
            ":hover, :focus": {
                color: "secondary",
            }
        }
    }
}