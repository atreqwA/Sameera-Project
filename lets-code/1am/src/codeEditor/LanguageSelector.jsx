import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "#eb6e2b";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div style={{ marginLeft: "1rem", marginBottom: "1rem" }}>
      <label style={{ marginBottom: "0.5rem", fontSize: "1.25rem", display: "block" }}>
        Language:
      </label>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          style={{
            backgroundColor: "#1a202c",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {language}
        </button>
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            backgroundColor: "#110c1b",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            display: "none", // Initially hidden, make it visible on button click
            marginTop: "0.5rem",
            zIndex: "1000",
          }}
          className="menu-list"
        >
          {languages.map(([lang, version]) => (
            <div
              key={lang}
              onClick={() => onSelect(lang)}
              style={{
                color: lang === language ? ACTIVE_COLOR : "#fff",
                backgroundColor: lang === language ? "#2d3748" : "transparent",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                borderBottom: "1px solid #333",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#2d3748")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = lang === language ? "#2d3748" : "transparent")}
            >
              {lang}
              <span style={{ color: "#718096", fontSize: "0.875rem" }}>
                ({version})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
