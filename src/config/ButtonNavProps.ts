import { ButtonConfig, StepProcessStepConfig } from 'lkt-vue-kernel';

export interface ButtonNavProps {
  prevButton: ButtonConfig|false
  nextButton: ButtonConfig|false
  isLoading: boolean
  currentStep: string
  currentStepConfig?: StepProcessStepConfig
  currentStepIndex: number
  visibleStepIndex: number
  amountOfSteps: number
  dots: boolean
  dotsNumbers: boolean
}