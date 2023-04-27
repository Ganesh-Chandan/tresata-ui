import ProfileAttribute from "./ProfileAttribute";
import ProfileSource from "./ProfileSource";
import styles from "./Profiles.module.scss";
import { useState } from "react";
import SearchBox from "../custom/SearchBox";
import Icon from "../custom/Icons";

const profileAttributes = [
  {
    id: "customerId",
    label: "Customer ID",
    tag: "No tag",
    starred: true,
    showSecondaryLabel: true,
    populated: "60%",
    populatedIndicator: "positive",
    unique: "120K",
    isImageRequired: false,
  },
  {
    id: "customerName",
    label: "Customer Name",
    tag: "name",
    starred: false,
    showSecondaryLabel: false,
    populated: "100%",
    populatedIndicator: "positive",
    unique: "120K",
    isImageRequired: false,
  },
  {
    id: "phone",
    label: "Phone",
    tag: "phone",
    starred: false,
    showSecondaryLabel: false,
    populated: "60%",
    populatedIndicator: "positive",
    unique: "120K",
    isImageRequired: true,
  },
  {
    id: "email",
    label: "Email",
    tag: "name",
    starred: true,
    showSecondaryLabel: false,
    populated: "34%",
    populatedIndicator: "negative",
    unique: "100",
    isImageRequired: false,
  },
  {
    id: "dob",
    label: "Date of Birth",
    tag: "name",
    starred: false,
    showSecondaryLabel: false,
    populated: "34%",
    populatedIndicator: "negative",
    unique: "100",
    isImageRequired: false,
  },
];

const profileSources = [
  {
    selected: true,
    starred: true,
    label: "Loyalty",
    expanded: false,
    record: 12,
    fields: 43,
    secondaryLabel: "Customers",
    secondaryLabelQty: "+4",
    isFavorite: false,
  },
  {
    selected: true,
    starred: false,
    label: "Ticketing",
    expanded: true,
    record: 12,
    fields: 43,
    secondaryLabel: "Customers",
    secondaryLabelQty: "+4",
    isFavorite: true,
  },
];

const Profiles = () => {
  const [selectedAttributeId, setSelectedAttributeId] = useState(
    profileAttributes[0].id
  );
  return (
    <div className={styles.container}>
      {profileSources.map((profileSource) => (
        <ProfileSource key={profileSource.label} {...profileSource} />
      ))}
      <div className={styles.searchContainer}>
        <SearchBox placeHolder={"Search Field Name"} isProfileSearch={true} />
        <Icon name="filter" className="filters" />
      </div>

      {profileAttributes.map((profileAttribute) => (
        <ProfileAttribute
          key={profileAttribute.id}
          {...profileAttribute}
          selected={selectedAttributeId === profileAttribute.id}
          selectAttribute={(id) => setSelectedAttributeId(id)}
        />
      ))}
    </div>
  );
};

export default Profiles;
