import { Text, View } from 'react-native'
import React from 'react'
import { styles } from '../../utils/styles'
import { twMerge } from 'tailwind-merge'
import TopContent from '../misc/TopContent'


type SectionProps = {
  title: string
  children: React.ReactNode
  isText?: boolean
}

function Section({ title, isText=true, children }: SectionProps) {
  return (
    <View className="mb-5">
      <Text className="text-lg dark:text-white font-semibold mb-2 text-[#111827]">
        {title}
      </Text>
      {
        isText ?
        <Text className="text-base text-gray-700 dark:text-white tracking-wide leading-relaxed">
            {children}
        </Text>
        :
        children
      }
    </View>
  );
}



const TermsComp = () => {
  return (
    <View className={twMerge(styles.screenContainer, 'gap-8 h-full')} >
      <TopContent title='Terms of Service' />

      <Text className="text-sm text-gray-500 mb-6">
        Last updated: January 2026
      </Text>

      <Section title="1. Introduction">
        Welcome to SurveyGH. SurveyGH is a mobile application designed to help users
        create, manage, and execute survey-related projects efficiently. By accessing
        or using the SurveyGH app, you agree to be bound by these Terms of Service.
        If you do not agree to these terms, please do not use the app.
      </Section>

      <Section title="2. Eligibility">
        You must be legally permitted to use the app under applicable laws in your
        jurisdiction. By using SurveyGH, you confirm that you meet this requirement.
      </Section>

      <Section title="3. Account Access and Authentication">
        SurveyGH uses third-party social authentication providers only, specifically
        Google and Apple. Users do not create traditional accounts or provide
        additional personal information directly to SurveyGH. Authentication and
        basic account identity are managed entirely by the selected provider.
      </Section>

      <Section title="4. User Data and Privacy">
        SurveyGH does not collect additional personal profile information beyond what
        is required for authentication through Google or Apple. Project data created
        by users is securely stored in a remote database and is accessible only by
        the authenticated user within the app.

        If a user deletes their account, all associated project data is permanently
        deleted without any retention period.
      </Section>

      <Section title="5. Subscription and Payments">
        SurveyGH offers a 30-day free trial with full access to all features. After
        the trial period, continued use of the app requires an active subscription,
        either monthly or yearly.

        All payments are processed through third-party app store providers. SurveyGH
        does not collect, store, or have access to any payment details such as card
        or bank information. Payment authorization is handled entirely by the
        respective platform.
      </Section>

      <Section title="6. Subscription Continuity">
        If a user deletes their account and later returns using the same authentication
        provider, any active subscription associated with that provider remains
        available, subject to the app store’s policies.
      </Section>

      <Section title="7. Account Deletion and Logout">
        Users may log out of the app at any time. Users may also permanently delete
        their account from within the app. Account deletion results in immediate and
        irreversible removal of all user data stored by SurveyGH.
      </Section>

      <Section title="8. Acceptable Use">
        You agree to use SurveyGH only for lawful purposes and in a manner that does
        not interfere with or disrupt the app’s functionality, security, or other
        users’ experience.
      </Section>

      <Section title="9. Service Availability">
        SurveyGH is provided on an as-is and as-available basis. While we strive for
        reliability, we do not guarantee uninterrupted or error-free operation.
        Features may be modified, suspended, or discontinued at any time.
      </Section>

      <Section title="10. Limitation of Liability">
        To the maximum extent permitted by law, SurveyGH and its developers shall not
        be liable for any indirect, incidental, or consequential damages arising from
        your use of the app.
      </Section>

      <Section title="11. Changes to These Terms">
        We may update these Terms of Service from time to time. Continued use of the
        app after changes take effect constitutes acceptance of the revised terms.
      </Section>

      <Section isText={false} title="12. Contact Information">
        <Text className="text-base text-gray-700 leading-relaxed mb-3">
            If you have questions, concerns, or feedback regarding these Terms of Service,
            you may contact the SurveyGH development team:
        </Text>

        <View className="gap-2">
            <Text className="text-base text-gray-700">
            Email: dev.surveygh@gmail.com
            </Text>
            <Text className="text-base text-gray-700">
            Phone: +233 257 737 537
            </Text>
            <Text className="text-base text-gray-700">
            WhatsApp: +233 541 097 145
            </Text>
        </View>
      </Section>

    </View>
  )
}

export default TermsComp