<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

import * as z from "zod";

const loading = ref(false);

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Enter a valid name"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string("Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormSchema = z.output<typeof contactFormSchema>;

const state = reactive<Partial<ContactFormSchema>>({
  name: undefined,
  email: undefined,
  phone: undefined,
  service: undefined,
  company: undefined,
  message: undefined,
});

const toast = useToast();

// Form submission handler
async function onSubmit(event: FormSubmitEvent<ContactFormSchema>) {
  loading.value = true;

  const response = await $fetch("/api/contact", { method: "POST", body: event.data });
  if (response.error) {
    toast.add({ title: "Error Sending Message", description: "We could not send message, please try again!" });
    loading.value = false;
  }
  toast.add({ title: "Message sent", description: "Thank you for contacting us, we will reply shortly.", color: "success" });
  console.warn(event.data);

  loading.value = false;
}

useSeoMeta({
  title: 'Contact Us - KIK Engineering Ltd',
  ogTitle: 'Contact Us - KIK Engineering Ltd',
  description: 'Get in touch with KIK Engineering Ltd for power infrastructure and renewable energy solutions. Contact us today for inquiries.',
  ogDescription: 'Get in touch with KIK Engineering Ltd for power infrastructure and renewable energy solutions. Contact us today for inquiries.'
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

const services = [
  'Power Distribution',
  'Electrical Installations',
  'Renewable Energy',
  'Public Lighting',
  'Capacity Building',
  'Other'
]

const isSubmitting = ref(false)
const submitted = ref(false)

const contactInfo = [
  {
    label: 'Abuja Office',
    icon: 'i-lucide-map-pin',
    details: [
      'No.24 Waziri Ibrahim Crescent',
      'Apo, Gudu District, Abuja'
    ]
  },
  {
    label: 'Kaduna Office',
    icon: 'i-lucide-map-pin',
    details: [
      'No.10 Daura Road New Extension',
      'Marafa, Kaduna'
    ]
  },
  {
    label: 'Jigawa Office',
    icon: 'i-lucide-map-pin',
    details: [
      'No.13 Kanya Yamma',
      'Kanya Babba, Babura L.G.A, Jigawa State'
    ]
  },
  {
    label: 'Phone',
    icon: 'i-lucide-phone',
    details: [
      '+234 803 590 8285'
    ]
  },
  {
    label: 'Email',
    icon: 'i-lucide-mail',
    details: [
      'info@kikengineeringltd.com'
    ]
  }
]

const businessHours = [
  { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
  { day: 'Sunday', time: 'Closed' }
]
</script>

<template>
  <div class="relative">
    <HeroBackground />

    <UPageHero title="Contact Us"
      description="Ready to power your next project? Get in touch with our team of experts today." :ui="{
        container: 'md:pt-18 lg:pt-20',
        title: 'max-w-4xl mx-auto',
        description: 'max-w-2xl mx-auto text-lg'
      }">
      <template #title>
        Get in <span class="text-primary">Touch</span>
      </template>
    </UPageHero>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection class="py-12 lg:py-16">
      <div class="grid lg:grid-cols-5 gap-8 lg:gap-12">
        <div class="lg:col-span-2 order-2 lg:order-1">
          <h2 class="text-2xl font-bold mb-6">Send Us a <span class="text-primary">Message</span></h2>

          <div v-if="submitted" class="bg-success/10 border border-success/30 rounded-xl p-6 text-center">
            <UIcon name="i-lucide-check-circle" class="w-16 h-16 text-success mx-auto mb-4" />
            <h3 class="text-xl font-bold text-success mb-2">Message Sent!</h3>
            <p class="text-muted">Thank you for contacting us. We'll get back to you within 24 hours.</p>
          </div>

          <UForm v-else :schema="contactFormSchema" :state="form" @submit="onSubmit" class="space-y-5">
            <UFormField label="Full Name" name="name" required>
              <UInput v-model="form.name" placeholder="John Doe" icon="i-lucide-user" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Email Address" name="email" required>
              <UInput v-model="form.email" type="email" placeholder="john@example.com" icon="i-lucide-mail" size="lg"
                class="w-full" />
            </UFormField>

            <UFormField label="Phone Number" name="phone">
              <UInput v-model="form.phone" type="tel" placeholder="+234 803 590 8285" icon="i-lucide-phone" size="lg"
                class="w-full" />
            </UFormField>

            <UFormField label="Company/Organization" name="company">
              <UInput v-model="form.company" placeholder="Your Company Ltd" icon="i-lucide-building-2" size="lg"
                class="w-full" />
            </UFormField>

            <UFormField label="Service Interested In" name="service">
              <USelect v-model="form.service" :items="services" placeholder="Select a service"
                icon="i-lucide-briefcase-business" class="w-full" size="xl" />
            </UFormField>

            <UFormField label="Message" name="message" required>
              <UTextarea v-model="form.message" placeholder="Tell us about your project or inquiry..." :rows="4"
                autoresize size="lg" class="w-full" />
            </UFormField>

            <UButton type="submit" size="lg" color="primary" :loading="isSubmitting" icon="i-lucide-send" block>
              Send Message
            </UButton>
          </UForm>
        </div>

        <div class="lg:col-span-3 order-1 lg:order-2 space-y-6">
          <div>
            <h2 class="text-2xl font-bold mb-6">Contact <span class="text-primary">Information</span></h2>

            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="info in contactInfo" :key="info.label" class="flex gap-3 p-4 rounded-xl bg-default/50">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <UIcon :name="info.icon" class="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold text-sm">{{ info.label }}</h3>
                  <p v-for="(detail, i) in info.details" :key="i" class="text-muted text-xs">{{ detail }}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-3">Business <span class="text-primary">Hours</span></h3>
            <div class="flex flex-wrap gap-3">
              <div v-for="hours in businessHours"
                class="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-default/50 border border-default text-center">
                <span class="font-medium text-sm block sm:inline">{{ hours.day }}</span>
                <span class="text-muted text-sm hidden sm:inline mx-2">•</span>
                <span class="text-muted text-sm">{{ hours.time }}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-3">Our <span class="text-primary">Location</span></h3>
            <UCard class="overflow-hidden" :ui="{ body: 'p-0' }">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1393.1766543195283!2d7.473766555251131!3d9.005748161029441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0c8cfa1b52bb%3A0x41321d501aa1eaf2!2s24%20Ibrahim%20Waziri%20Crescent%20Apo%20Abuja%20Rd%2C%20Gudu%2C%20Abuja%20900110%2C%20Federal%20Capital%20Territory!5e1!3m2!1sen!2sng!4v1771673845970!5m2!1sen!2sng"
                width="100%" height="300" style="border:0;" allowfullscreen loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </UCard>
          </div>
        </div>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection class="py-12 lg:py-16">
      <UCard class="bg-linear-to-r from-primary/10 to-primary/5 border-2 border-primary/20 text-center py-10 px-6">
        <h2 class="text-2xl lg:text-3xl font-bold mb-4">Need Emergency <span class="text-primary">Support?</span></h2>
        <p class="text-muted max-w-2xl mx-auto mb-6">
          Our team is available for urgent electrical and power infrastructure emergencies. Contact us immediately for
          prompt assistance.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <UButton block size="lg" color="error" icon="i-lucide-phone" to="tel:+2348035908285">
            Call Emergency Line
          </UButton>
          <UButton size="lg" variant="outline" color="primary" icon="i-lucide-message-circle"
            to="https://wa.me/2348035908285">
            WhatsApp Us
          </UButton>
        </div>
      </UCard>
    </UPageSection>
  </div>
</template>
