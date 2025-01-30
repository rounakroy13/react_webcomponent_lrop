import {
  FlexBox,
  Button,
  Title,
  Carousel,
  Form,
  FormGroup,
  FormItem,
  Label,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectPageTitle,
  Text,
  Bar,
  ObjectPageHeader,
  Link,
  ObjectStatus,
  ObjectPage


} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/CardHeader.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
export function DetailsPage() {
  return (
    <div>
      <ObjectPage
        footerArea={<Bar design="FloatingFooter" endContent={<><Button design="Positive">Accept</Button><Button design="Negative">Reject</Button></>} />}
        headerArea={<ObjectPageHeader>
          <Carousel
  arrowsPlacement="Content"
  onNavigate={function Ki(){}}
>
<FlexBox direction="Column"><Label></Label><Link >+91 9051167655</Link><Link href="mailto:ui5-webcomponents-react@sap.com">rounak.roy@sap.com</Link></FlexBox>
<FlexBox direction="Column" style={{ padding: '10px' }}><Label>SAP Labs India</Label><Label>Bangalore, India</Label></FlexBox>
 
</Carousel>
          
          </ObjectPageHeader>}
        image="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png"
        imageShapeCircle
        mode="Default"
        onBeforeNavigate={function Ki() { }}
        onPinButtonToggle={function Ki() { }}
        onSelectedSectionChange={function Ki() { }}
        onToggleHeaderArea={function Ki() { }}
        selectedSectionId="goals"
        style={{
          height: '1000px'
        }}
        titleArea={<ObjectPageTitle header="Rounak Roy" subHeader="Senior UI Developer"><ObjectStatus state="Positive">I322203</ObjectStatus></ObjectPageTitle>}
      >
        <ObjectPageSection
          aria-label="Goals"
          id="goals"
          titleText="Goals"
        >
          <Form
            labelSpan="S12 M12 L12 XL12"
            layout="S1 M2 L3 XL3"
          >
            <FormItem labelContent={<Label showColon>Evangelize the UI framework across the company</Label>}>
              <Text>
                4 days overdue - Cascaded
              </Text>
            </FormItem>
            <FormItem labelContent={<Label showColon>Get trained in development management direction</Label>}>
              <Text>
                Due Nov, 21
              </Text>
            </FormItem>
            <FormItem labelContent={<Label showColon>Mentor junior developers</Label>}>
              <Text>
                Due Dec, 31 - Cascaded
              </Text>
            </FormItem>
          </Form>
        </ObjectPageSection>
        <ObjectPageSection
          aria-label="Personal"
          id="personal"
          titleText="Personal"
        >
          <ObjectPageSubSection
            actions={<><Button design="Emphasized" style={{ minWidth: '120px' }}>Custom Action</Button><Button design="Transparent" icon="action-settings" tooltip="settings" /><Button design="Transparent" icon="download" tooltip="download" /></>}
            aria-label="Connect"
            id="personal-connect"
            titleText="Connect"
          >
            <Form
              style={{
                alignItems: 'baseline'
              }}
            >
              <FormGroup headerText="Phone Numbers">
                <FormItem labelContent={<Label showColon>Home</Label>}>
                  <Text>
                    +1 234-567-8901
                  </Text>
                  <Text>
                    +1 234-567-5555
                  </Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Social Accounts">
                <FormItem labelContent={<Label showColon>LinkedIn</Label>}>
                  <Text>
                    /DeniseSmith
                  </Text>
                </FormItem>
                <FormItem labelContent={<Label showColon>Twitter</Label>}>
                  <Text>
                    @DeniseSmith
                  </Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Addresses">
                <FormItem labelContent={<Label showColon>Home Address</Label>}>
                  <Text>
                    2096 Mission Street
                  </Text>
                </FormItem>
                <FormItem labelContent={<Label showColon>Mailing Address</Label>}>
                  <Text>
                    PO Box 32114
                  </Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Mailing Address">
                <FormItem labelContent={<Label showColon>Work</Label>}>
                  <Text>
                    DeniseSmith@sap.com
                  </Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            aria-label="Payment Information"
            id="personal-payment-information"
            titleText="Payment Information"
          >
            <Form>
              <FormGroup headerText="Salary">
                <FormItem labelContent={<Label showColon>Bank Transfer</Label>}>
                  <Text>
                    Money Bank, Inc.
                  </Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Payment method for Expenses">
                <FormItem labelContent={<Label showColon>Extra Travel Expenses</Label>}>
                  <Text>
                    Cash 100 USD
                  </Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection
          aria-label="Employment"
          id="employment"
          titleText="Employment"
        >
          <ObjectPageSubSection
            aria-label="Job Information"
            id="employment-job-information"
            titleText="Job Information"
          >
            <Form>
              <FormItem labelContent={<Label showColon>Job Classification</Label>}>
                <FlexBox direction="Column">
                  <Text>
                    Senior UI Developer
                  </Text>
                  <Label>
                    (UIDEV-SR)
                  </Label>
                </FlexBox>
              </FormItem>
              <FormItem labelContent={<Label showColon>Job Title</Label>}>
                <Text>
                  Developer
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Employee Class</Label>}>
                <Text>
                  Employee
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Manager</Label>}>
                <FlexBox direction="Column">
                  <Text>
                    Dan Smith
                  </Text>
                  <Label>
                    Development Manager
                  </Label>
                </FlexBox>
              </FormItem>
              <FormItem labelContent={<Label showColon>Pay Grade</Label>}>
                <Text>
                  Salary Grade 18 (GR-14)
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>FTE</Label>}>
                <Text>
                  1
                </Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            aria-label="Employee Details"
            id="employment-employee-details"
            titleText="Employee Details"
          >
            <Form>
              <FormItem labelContent={<Label showColon>Start Date</Label>}>
                <Text>
                  Jan 01, 2018
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>End Date</Label>}>
                <Text>
                  Dec 31, 9999
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Payroll Start Date</Label>}>
                <Text>
                  Jan 01, 2018
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Benefits Start Date</Label>}>
                <Text>
                  Jul 01, 2018
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Company Car Eligibility</Label>}>
                <Text>
                  Jan 01, 2021
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Equity Start Date</Label>}>
                <Text>
                  Jul 01, 2018
                </Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            aria-label="Job Relationship"
            id="employment-job-relationship"
            titleText="Job Relationship"
          >
            <Form>
              <FormItem labelContent={<Label showColon>Manager</Label>}>
                <Text>
                  John Doe
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Scrum Master</Label>}>
                <Text>
                  Michael Adams
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Product Owner</Label>}>
                <Text>
                  John Miller
                </Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>
    </div>
  );
}
