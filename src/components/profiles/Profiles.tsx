import ProfileAttribute from "./ProfileAttribute";
import ProfileSource from "./ProfileSource";
import styles from "./Profiles.module.scss";

const profileAttributes = [
  {
    label: "Customer ID",
    tag: "No tag",
    starred: true,
    showSecondaryLabel: true,
    populated: "60%",
    unique: "120K",
  },
  {
    label: "Customer Name",
    tag: "name",
    starred: false,
    showSecondaryLabel: false,
    populated: "100%",
    unique: "120K",
  },
  {
    label: "Phone",
    tag: "phone",
    selected: true,
    starred: false,
    showSecondaryLabel: false,
    populated: "60%",
    unique: "120K",
  },
  {
    label: "Email",
    tag: "name",
    starred: true,
    showSecondaryLabel: false,
    populated: "34%",
    unique: "100",
  },
  {
    label: "Date of Birth",
    tag: "name",
    starred: false,
    showSecondaryLabel: false,
    populated: "34%",
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
  return (
    <div className={styles.container}>
      {profileSources.map((profileSource) => (
        <ProfileSource key={profileSource.label} {...profileSource} />
      ))}
      {profileAttributes.map((profileAttribute) => (
        <ProfileAttribute key={profileAttribute.label} {...profileAttribute} />
      ))}
    </div>
  );
};

export default Profiles;
