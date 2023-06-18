import { Button } from '@react-email/button'
import { Body, Hr, Link, Text } from '@react-email/components'
import { Container } from '@react-email/container'
import { Head } from '@react-email/head'
import { Heading } from '@react-email/heading'
import { Html } from '@react-email/html'
import { Tailwind } from '@react-email/tailwind'
import * as React from 'react'

interface Props {
    name: string
    content: string
}
export default function EmailTemplate({ name, content }: Props) {
    return (
        <Html>
            <Head></Head>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="shadow-lg border border-solid border-neutral-200 rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Join <strong>{name}</strong>
                        </Heading>
                        <Text>
                            Hello <strong>Jitu</strong>
                        </Text>
                        <Text>{content}</Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            or copy and paste this URL into your browser:{' '}
                            <Link
                                href={'link'}
                                className="text-blue-600 no-underline"
                            >
                                link
                            </Link>
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Button
                            className="bg-blue-600 focus:outline-none text-white text-[12px] font-semibold no-underline text-center w-full rounded p-2"
                            href={'example.com'}
                        >
                            Join the {name}
                        </Button>
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This invitation was intended for{' '}
                            <span className="text-black">{'jitunayak '}</span>
                            .This invite was sent from{' '}
                            <span className="text-black">'ip'</span> located in{' '}
                            <span className="text-black">{'india'}</span>. If
                            you were not expecting this invitation, you can
                            ignore this email. If you are concerned about your
                            account's safety, please reply to this email to get
                            in touch with us.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
