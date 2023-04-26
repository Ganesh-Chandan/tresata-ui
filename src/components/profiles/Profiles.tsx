import ProfileAttribute from "./ProfileAttribute";
import ProfileSource from "./ProfileSource";
import styles from "./Profiles.module.scss";
import { useState } from "react";

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
