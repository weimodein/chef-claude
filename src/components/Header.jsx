import chefClaudeIcon from "../assets/chef-claude-icon.png";

function Header() {
  return (
    <header className="header-container">
      <img src={chefClaudeIcon} alt="Chef claude icon" />
      <h1>Chef Claude</h1>
    </header>
  );
}

export default Header;
