import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-1">
      <div className="companyLogo">
        <img src="images/company-chaabi-co-image-1.jpg" alt="Logo" />
      </div>
      {/* <div className="seperator"></div> */}
      <div className="sections">
        <div className="activeSection">
          <img
            src="images/company-chaabi-co-iconly-bulk-category.svg"
            alt="bulk-category-icon"
          />
          <div>Dashboard</div>
        </div>
        <div className="sectionItem">
          <img
            src="images/company-chaabi-co-iconly-bulk-game.svg"
            alt="bulk-game-icon"
          />
          <div>Trainings</div>
        </div>
        <div className="sectionItem">
          <img
            src="images/company-chaabi-co-iconly-bulk-ticket-star.svg"
            alt="ticket-star-icon"
          />
          <div>Users</div>
        </div>
        <div className="sectionItem">
          <img
            src="images/company-chaabi-co-iconly-bulk-location.svg"
            alt="location-icon"
          />
          <div>Analytics</div>
        </div>
        <div className="sectionItem">
          <img
            src="images/company-chaabi-co-iconly-bulk-location.svg"
            alt="location-icon"
          />
          <div>My Account</div>
        </div>
        <div className="sectionItem">
          <img
            src="images/company-chaabi-co-iconly-bulk-location.svg"
            alt="location-icon"
          />
          <div>Support</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
