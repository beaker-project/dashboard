import React from 'react';

import {
  PageSection,
  PageSectionVariants,
  Title,
} from '@patternfly/react-core';

const LandingPage: React.FC = () => {
  return (
    <PageSection variant={PageSectionVariants.light}>
      <Title headingLevel="h1" size="lg">
        Welcome to Beaker Dashboard
      </Title>
    </PageSection>
  );
};

export default LandingPage;
