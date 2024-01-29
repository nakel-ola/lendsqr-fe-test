import { DetailsCard, UserInfo } from "./feature";
import styles from "./page.module.scss";

import { Fragment } from "react";

type Props = {};
export default function Details(props: Props) {
  return (
    <Fragment>
      <UserInfo />

      <section className={styles.card}>
        <DetailsCard
          title="Personal Information"
          items={[
            {
              name: "full Name",
              value: "Grace Effiom",
            },
            {
              name: "Phone Number",
              value: "07060780922",
            },
            {
              name: "Email Address",
              value: "grace@gmail.com",
            },
            {
              name: "Bvn",
              value: "07060780922",
            },
            {
              name: "Marital status",
              value: "Single",
            },
            {
              name: "Children",
              value: "None",
            },
            {
              name: "Type of residence",
              value: "Parent’s Apartment",
            },
          ]}
        />

        <hr />
        <DetailsCard
          title="Education and Employment"
          items={[
            {
              name: "level of education",
              value: "B.Sc",
            },
            {
              name: "employment status",
              value: "Employed",
            },
            {
              name: "sector of employment",
              value: "FinTech",
            },
            {
              name: "Duration of employment",
              value: "2 years",
            },
            {
              name: "office email",
              value: "grace@lendsqr.com",
            },
            {
              name: "Monthly income",
              value: "₦200,000.00- ₦400,000.00",
            },
            {
              name: "loan repayment",
              value: "40,000",
            },
          ]}
        />
        <hr />
        <DetailsCard
          title="Socials"
          items={[
            {
              name: "Twitter",
              value: "@grace_effiom",
            },
            {
              name: "Facebook",
              value: "Grace Effiom",
            },
            {
              name: "Instagram",
              value: "@grace_effiom",
            },
          ]}
        />

        <hr />
        <DetailsCard
          title="Guarantor"
          items={[
            {
              name: "full Name",
              value: "Debby Ogana",
            },
            {
              name: "Phone Number",
              value: "07060780922",
            },
            {
              name: "Email Address",
              value: "debby@gmail.com",
            },
            {
              name: "Relationship",
              value: "Sister",
            },
          ]}
        />

        <hr />
        <DetailsCard
          title=""
          items={[
            {
              name: "full Name",
              value: "Debby Ogana",
            },
            {
              name: "Phone Number",
              value: "07060780922",
            },
            {
              name: "Email Address",
              value: "debby@gmail.com",
            },
            {
              name: "Relationship",
              value: "Sister",
            },
          ]}
        />
      </section>
    </Fragment>
  );
}