import { ButtonConfig } from 'lkt-vue-kernel';

export interface ButtonNavProps {
  prevButton: ButtonConfig|false
  nextButton: ButtonConfig|false
  isLoading: boolean
  currentStep: string
  currentStepIndex: number
  amountOfSteps: number
  dots: boolean
  dotsNumbers: boolean
}