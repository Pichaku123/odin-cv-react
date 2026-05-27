export default function Footer() {
    return (
        <footer
            style={{
                padding: "1rem",
                background: "#222",
                color: "#fff",
                textAlign: "center",
                marginTop: "2rem",
            }}
        >
            <small>Made with React • {new Date().getFullYear()}</small>
        </footer>
    );
}
