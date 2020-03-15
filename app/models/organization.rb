class Organization < ApplicationRecord

    scope :by_description, -> (description) { where(description: description) }
end
