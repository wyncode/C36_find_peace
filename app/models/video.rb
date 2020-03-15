# frozen_string_literal: true

class Video < ApplicationRecord
  def as_json(_options = {})
    {
      id: id,
      title: title,
      url: url
    }
  end
end
