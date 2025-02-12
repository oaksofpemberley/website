import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Services',
  description: 'go-to-market approach',
}

export default function Why() {
  return (
    <SimpleLayout
      title="Helping Early Stage Companies Grow and Thrive"
      intro="Ensure your company is well-equipped to navigate the complexities of the DoD and Federal market."
    >
      <div className="space-y-20">
        <ToolsSection title="Strategic Advising">
          <Tool title="Deep Understanding">
            In-depth knowledge of DoD and Federal procurement processes, regulations, and funding cycles.
          </Tool>
          <Tool title="Strong Network">
           Established relationships with key decision-makers, influencers, and contracting officers within the target agencies and departments.
          </Tool>
          <Tool title="Technical Acumen">
           Ability to articulate the company’s technology and value proposition in a way that resonates with technical and non-technical stakeholders.
          </Tool>
          <Tool title="Competitive Intelligence">
           Awareness of the competitive landscape and the ability to differentiate the company’s offerings.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Execution">
          <Tool title="Strategic Approach">
           Ability to develop and execute a comprehensive go-to-market strategy, including target customer identification, sales pipeline development, and marketing/outreach initiatives.
          </Tool>
          <Tool title="Tactical Sales Execution">
           Strong sales closing skills, with the ability to navigate complex negotiations and secure contracts. 
          </Tool>
          <Tool title="Communication and Relationship Building">
           Excellent interpersonal and communication skills to build rapport and trust with diverse stakeholders.
          </Tool>
          <Tool title="Team Collaboration">
           Ability to work effectively with internal teams, including engineering, product management, and marketing, to ensure alignment with sales goals.
          </Tool>
          <Tool title="Adaptability">
           Flexibility to adjust to the dynamic nature of the DoD and Federal market and changing customer requirements.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Additional Considerations">
          <Tool title="Security Clearance">
            Ability to obtain a security clearance, to support your company’s technology and target customers.
          </Tool>
          <Tool title="Cultural Fit">
            Understand and align with DoD and Federal mission and values, while recognizing and adapting to your company’s values and mission, as well as a passion for working in a fast-paced, startup environment.
          </Tool>
        </ToolsSection>

      </div>
    </SimpleLayout>
  )
}
